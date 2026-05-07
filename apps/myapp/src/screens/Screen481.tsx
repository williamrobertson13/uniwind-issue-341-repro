import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy481 } from '../generated/copy/copy481';
import { layout481 } from '../generated/layouts/layout481';
import { palette481 } from '../generated/palettes/palette481';

const RuntimeView481 = withUniwind(View);

export function Screen481() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView481 styleClassName={layout481.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy481.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy481.detail} / {palette481.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
