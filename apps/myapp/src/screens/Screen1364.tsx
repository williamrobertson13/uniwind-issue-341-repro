import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1364 } from '../generated/copy/copy1364';
import { layout1364 } from '../generated/layouts/layout1364';
import { palette1364 } from '../generated/palettes/palette1364';

const RuntimeView1364 = withUniwind(View);

export function Screen1364() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1364 styleClassName={layout1364.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1364.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1364.detail} / {palette1364.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
