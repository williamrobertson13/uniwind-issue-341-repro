import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy110 } from '../generated/copy/copy110';
import { layout110 } from '../generated/layouts/layout110';
import { palette110 } from '../generated/palettes/palette110';

const RuntimeView110 = withUniwind(View);

export function Screen110() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView110 styleClassName={layout110.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy110.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy110.detail} / {palette110.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
