import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1287 } from '../generated/copy/copy1287';
import { layout1287 } from '../generated/layouts/layout1287';
import { palette1287 } from '../generated/palettes/palette1287';

const RuntimeView1287 = withUniwind(View);

export function Screen1287() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1287 styleClassName={layout1287.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1287.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1287.detail} / {palette1287.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
