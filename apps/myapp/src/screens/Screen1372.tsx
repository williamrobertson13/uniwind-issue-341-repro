import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1372 } from '../generated/copy/copy1372';
import { layout1372 } from '../generated/layouts/layout1372';
import { palette1372 } from '../generated/palettes/palette1372';

const RuntimeView1372 = withUniwind(View);

export function Screen1372() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView1372 styleClassName={layout1372.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1372.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1372.detail} / {palette1372.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
