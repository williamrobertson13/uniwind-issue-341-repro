import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy737 } from '../generated/copy/copy737';
import { layout737 } from '../generated/layouts/layout737';
import { palette737 } from '../generated/palettes/palette737';

const RuntimeView737 = withUniwind(View);

export function Screen737() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView737 styleClassName={layout737.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy737.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy737.detail} / {palette737.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
