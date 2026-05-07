import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy383 } from '../generated/copy/copy383';
import { layout383 } from '../generated/layouts/layout383';
import { palette383 } from '../generated/palettes/palette383';

const RuntimeView383 = withUniwind(View);

export function Screen383() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView383 styleClassName={layout383.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy383.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy383.detail} / {palette383.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
