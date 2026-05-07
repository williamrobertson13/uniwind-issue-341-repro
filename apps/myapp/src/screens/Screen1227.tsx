import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1227 } from '../generated/copy/copy1227';
import { layout1227 } from '../generated/layouts/layout1227';
import { palette1227 } from '../generated/palettes/palette1227';

const RuntimeView1227 = withUniwind(View);

export function Screen1227() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1227 styleClassName={layout1227.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1227.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1227.detail} / {palette1227.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
