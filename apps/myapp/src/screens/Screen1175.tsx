import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1175 } from '../generated/copy/copy1175';
import { layout1175 } from '../generated/layouts/layout1175';
import { palette1175 } from '../generated/palettes/palette1175';

const RuntimeView1175 = withUniwind(View);

export function Screen1175() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1175 styleClassName={layout1175.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1175.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1175.detail} / {palette1175.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
