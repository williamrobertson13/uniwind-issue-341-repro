import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy950 } from '../generated/copy/copy950';
import { layout950 } from '../generated/layouts/layout950';
import { palette950 } from '../generated/palettes/palette950';

const RuntimeView950 = withUniwind(View);

export function Screen950() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView950 styleClassName={layout950.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy950.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy950.detail} / {palette950.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
