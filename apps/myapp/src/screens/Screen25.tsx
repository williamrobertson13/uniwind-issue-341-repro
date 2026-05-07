import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy25 } from '../generated/copy/copy25';
import { layout25 } from '../generated/layouts/layout25';
import { palette25 } from '../generated/palettes/palette25';

const RuntimeView25 = withUniwind(View);

export function Screen25() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView25 styleClassName={layout25.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy25.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy25.detail} / {palette25.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
