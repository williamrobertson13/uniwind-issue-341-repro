import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy326 } from '../generated/copy/copy326';
import { layout326 } from '../generated/layouts/layout326';
import { palette326 } from '../generated/palettes/palette326';

const RuntimeView326 = withUniwind(View);

export function Screen326() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView326 styleClassName={layout326.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy326.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy326.detail} / {palette326.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
