import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1116 } from '../generated/copy/copy1116';
import { layout1116 } from '../generated/layouts/layout1116';
import { palette1116 } from '../generated/palettes/palette1116';

const RuntimeView1116 = withUniwind(View);

export function Screen1116() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView1116 styleClassName={layout1116.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1116.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1116.detail} / {palette1116.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
