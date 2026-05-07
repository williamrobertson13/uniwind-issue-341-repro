import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy619 } from '../generated/copy/copy619';
import { layout619 } from '../generated/layouts/layout619';
import { palette619 } from '../generated/palettes/palette619';

const RuntimeView619 = withUniwind(View);

export function Screen619() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView619 styleClassName={layout619.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy619.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy619.detail} / {palette619.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
