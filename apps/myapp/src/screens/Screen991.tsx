import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy991 } from '../generated/copy/copy991';
import { layout991 } from '../generated/layouts/layout991';
import { palette991 } from '../generated/palettes/palette991';

const RuntimeView991 = withUniwind(View);

export function Screen991() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView991 styleClassName={layout991.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy991.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy991.detail} / {palette991.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
