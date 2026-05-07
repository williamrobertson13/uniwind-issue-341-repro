import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1076 } from '../generated/copy/copy1076';
import { layout1076 } from '../generated/layouts/layout1076';
import { palette1076 } from '../generated/palettes/palette1076';

const RuntimeView1076 = withUniwind(View);

export function Screen1076() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1076 styleClassName={layout1076.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1076.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1076.detail} / {palette1076.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
