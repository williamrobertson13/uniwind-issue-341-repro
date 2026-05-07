import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy601 } from '../generated/copy/copy601';
import { layout601 } from '../generated/layouts/layout601';
import { palette601 } from '../generated/palettes/palette601';

const RuntimeView601 = withUniwind(View);

export function Screen601() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView601 styleClassName={layout601.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy601.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy601.detail} / {palette601.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
