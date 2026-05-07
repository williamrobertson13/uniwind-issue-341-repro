import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy703 } from '../generated/copy/copy703';
import { layout703 } from '../generated/layouts/layout703';
import { palette703 } from '../generated/palettes/palette703';

const RuntimeView703 = withUniwind(View);

export function Screen703() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView703 styleClassName={layout703.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy703.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy703.detail} / {palette703.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
