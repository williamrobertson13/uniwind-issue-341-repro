import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1000 } from '../generated/copy/copy1000';
import { layout1000 } from '../generated/layouts/layout1000';
import { palette1000 } from '../generated/palettes/palette1000';

const RuntimeView1000 = withUniwind(View);

export function Screen1000() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView1000 styleClassName={layout1000.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1000.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1000.detail} / {palette1000.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
