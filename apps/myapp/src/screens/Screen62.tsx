import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy62 } from '../generated/copy/copy62';
import { layout62 } from '../generated/layouts/layout62';
import { palette62 } from '../generated/palettes/palette62';

const RuntimeView62 = withUniwind(View);

export function Screen62() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView62 styleClassName={layout62.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy62.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy62.detail} / {palette62.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
