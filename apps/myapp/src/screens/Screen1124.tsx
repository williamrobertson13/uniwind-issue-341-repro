import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1124 } from '../generated/copy/copy1124';
import { layout1124 } from '../generated/layouts/layout1124';
import { palette1124 } from '../generated/palettes/palette1124';

const RuntimeView1124 = withUniwind(View);

export function Screen1124() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1124 styleClassName={layout1124.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1124.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1124.detail} / {palette1124.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
