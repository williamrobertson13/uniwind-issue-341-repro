import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy865 } from '../generated/copy/copy865';
import { layout865 } from '../generated/layouts/layout865';
import { palette865 } from '../generated/palettes/palette865';

const RuntimeView865 = withUniwind(View);

export function Screen865() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView865 styleClassName={layout865.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy865.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy865.detail} / {palette865.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
