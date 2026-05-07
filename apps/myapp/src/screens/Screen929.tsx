import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy929 } from '../generated/copy/copy929';
import { layout929 } from '../generated/layouts/layout929';
import { palette929 } from '../generated/palettes/palette929';

const RuntimeView929 = withUniwind(View);

export function Screen929() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView929 styleClassName={layout929.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy929.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy929.detail} / {palette929.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
