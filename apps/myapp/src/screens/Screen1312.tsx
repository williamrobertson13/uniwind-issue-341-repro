import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1312 } from '../generated/copy/copy1312';
import { layout1312 } from '../generated/layouts/layout1312';
import { palette1312 } from '../generated/palettes/palette1312';

const RuntimeView1312 = withUniwind(View);

export function Screen1312() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView1312 styleClassName={layout1312.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1312.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1312.detail} / {palette1312.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
