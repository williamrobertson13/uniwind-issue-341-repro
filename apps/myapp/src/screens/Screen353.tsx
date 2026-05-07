import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy353 } from '../generated/copy/copy353';
import { layout353 } from '../generated/layouts/layout353';
import { palette353 } from '../generated/palettes/palette353';

const RuntimeView353 = withUniwind(View);

export function Screen353() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView353 styleClassName={layout353.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy353.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy353.detail} / {palette353.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
