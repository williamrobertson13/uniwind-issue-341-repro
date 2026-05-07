import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy55 } from '../generated/copy/copy55';
import { layout55 } from '../generated/layouts/layout55';
import { palette55 } from '../generated/palettes/palette55';

const RuntimeView55 = withUniwind(View);

export function Screen55() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView55 styleClassName={layout55.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy55.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy55.detail} / {palette55.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
