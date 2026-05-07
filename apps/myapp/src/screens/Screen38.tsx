import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy38 } from '../generated/copy/copy38';
import { layout38 } from '../generated/layouts/layout38';
import { palette38 } from '../generated/palettes/palette38';

const RuntimeView38 = withUniwind(View);

export function Screen38() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView38 styleClassName={layout38.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy38.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy38.detail} / {palette38.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
