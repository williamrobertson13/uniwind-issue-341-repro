import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy362 } from '../generated/copy/copy362';
import { layout362 } from '../generated/layouts/layout362';
import { palette362 } from '../generated/palettes/palette362';

const RuntimeView362 = withUniwind(View);

export function Screen362() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView362 styleClassName={layout362.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy362.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy362.detail} / {palette362.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
