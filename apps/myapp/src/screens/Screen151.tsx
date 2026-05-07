import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy151 } from '../generated/copy/copy151';
import { layout151 } from '../generated/layouts/layout151';
import { palette151 } from '../generated/palettes/palette151';

const RuntimeView151 = withUniwind(View);

export function Screen151() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView151 styleClassName={layout151.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy151.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy151.detail} / {palette151.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
