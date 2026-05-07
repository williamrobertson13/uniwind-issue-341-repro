import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1384 } from '../generated/copy/copy1384';
import { layout1384 } from '../generated/layouts/layout1384';
import { palette1384 } from '../generated/palettes/palette1384';

const RuntimeView1384 = withUniwind(View);

export function Screen1384() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView1384 styleClassName={layout1384.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1384.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1384.detail} / {palette1384.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
